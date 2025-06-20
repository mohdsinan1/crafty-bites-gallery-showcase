import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              Page Not Found
            </h2>
            <p className="text-gray-600">
              The page you're looking for doesn't exist.
            </p>
            <Link to="/" className="inline-flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600 hover:text-gray-800 transition-colors">
                Go Back Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
