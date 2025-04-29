import logging
import azure.functions as func
import json
import os
from azure.cosmos import CosmosClient, exceptions

app = func.FunctionApp()

# Initialize CosmosDB client
endpoint = os.environ["COSMOS_ENDPOINT"]
key = os.environ["COSMOS_KEY"]
database_name = os.environ["COSMOS_DATABASE"]
container_name = os.environ["COSMOS_CONTAINER"]

client = CosmosClient(endpoint, key)
database = client.get_database_client(database_name)
container = database.get_container_client(container_name)

@app.route(route="GetVisitorCount", methods=["GET"], auth_level=func.AuthLevel.ANONYMOUS)
def get_visitor_count(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request to get visitor count.')
    
    try:
        # Query for the visitor counter document
        counter_id = "visitor-counter"
        
        try:
            # Try to read the counter document
            counter_item = container.read_item(item=counter_id, partition_key=counter_id)
            current_count = counter_item.get('count', 0)
        except exceptions.CosmosResourceNotFoundError:
            # If document doesn't exist, create it with initial count
            counter_item = {
                'id': counter_id,
                'count': 0
            }
            container.create_item(body=counter_item)
            current_count = 0
        
        # Increment the counter
        current_count += 1
        counter_item['count'] = current_count
        
        # Update the counter in the database
        container.upsert_item(body=counter_item)
        
        # Return the updated count
        return func.HttpResponse(
            json.dumps({"count": current_count}),
            mimetype="application/json",
            status_code=200,
            headers={
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        )
    
    except Exception as e:
        logging.error(f"Error processing visitor count: {str(e)}")
        return func.HttpResponse(
            json.dumps({"error": str(e)}),
            mimetype="application/json",
            status_code=500,
            headers={
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        )