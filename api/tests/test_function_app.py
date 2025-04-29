import unittest
import json
from unittest.mock import patch, MagicMock
import azure.functions as func
import sys
import os

# Add the parent directory to sys.path to import the function_app module
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Import the function to test
from function_app import get_visitor_count

class TestVisitorCounter(unittest.TestCase):
    @patch('function_app.container')
    def test_get_visitor_count_existing_counter(self, mock_container):
        # Arrange
        mock_req = MagicMock(spec=func.HttpRequest)
        mock_counter_item = {'id': 'visitor-counter', 'count': 5}
        
        # Mock the read_item method to return an existing counter
        mock_container.read_item.return_value = mock_counter_item
        
        # Act
        response = get_visitor_count(mock_req)
        
        # Assert
        mock_container.read_item.assert_called_once_with(item='visitor-counter', partition_key='visitor-counter')
        mock_container.upsert_item.assert_called_once()
        
        # Verify the response
        self.assertEqual(response.status_code, 200)
        response_body = json.loads(response.get_body())
        self.assertEqual(response_body['count'], 6)  # Count should be incremented
    
    @patch('function_app.container')
    def test_get_visitor_count_new_counter(self, mock_container):
        # Arrange
        mock_req = MagicMock(spec=func.HttpRequest)
        
        # Mock the read_item method to raise CosmosResourceNotFoundError
        from azure.cosmos import exceptions
        mock_container.read_item.side_effect = exceptions.CosmosResourceNotFoundError
        
        # Act
        response = get_visitor_count(mock_req)
        
        # Assert
        mock_container.read_item.assert_called_once()
        mock_container.create_item.assert_called_once()
        mock_container.upsert_item.assert_called_once()
        
        # Verify the response
        self.assertEqual(response.status_code, 200)
        response_body = json.loads(response.get_body())
        self.assertEqual(response_body['count'], 1)  # New counter should start at 1
    
    @patch('function_app.container')
    def test_get_visitor_count_error_handling(self, mock_container):
        # Arrange
        mock_req = MagicMock(spec=func.HttpRequest)
        
        # Mock the read_item method to raise an unexpected exception
        mock_container.read_item.side_effect = Exception("Test error")
        
        # Act
        response = get_visitor_count(mock_req)
        
        # Assert
        self.assertEqual(response.status_code, 500)
        response_body = json.loads(response.get_body())
        self.assertIn('error', response_body)

if __name__ == '__main__':
    unittest.main()