import { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Eye } from 'lucide-react';

interface VisitorCountResponse {
  count: number;
}

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        setLoading(true);
        // environment variable/local development URL
        const apiUrl = import.meta.env.VITE_VISITOR_API_URL || '/api/GetVisitorCount';

        // This URL should be updated to Azure Function endpoint when deployed
        // const apiUrl = import.meta.env.VITE_VISITOR_API_URL || 'https://azure-resume-api.azurewebsites.net/api/GetVisitorCount';
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data: VisitorCountResponse = await response.json();
        setCount(data.count);
        setError(null);
      } catch (err) {
        console.error('Error fetching visitor count:', err);
        setError('Failed to load visitor count');
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Badge variant="outline" className="px-3 py-1 flex items-center gap-1.5 bg-secondary/30 backdrop-blur-sm hover:bg-secondary/50 transition-colors duration-300">
        <Eye size={14} className="text-muted-foreground" />
        {loading ? (
          <span className="text-xs animate-pulse">Loading...</span>
        ) : error ? (
          <span className="text-xs text-destructive">{error}</span>
        ) : (
          <span className="text-xs">{count?.toLocaleString() || 0} visitors</span>
        )}
      </Badge>
    </div>
  );
};

export default VisitorCounter;