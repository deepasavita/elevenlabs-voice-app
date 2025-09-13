import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

def test_mongodb_connection():
    try:
        # Get connection string from environment
        mongo_uri = os.getenv("MONGO_URI")
        
        if not mongo_uri:
            print("ERROR: MONGO_URI not found in environment variables")
            print("Please make sure you have a .env file with MONGO_URI")
            return False
            
        # Try to connect
        client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
        
        # Test the connection
        client.admin.command('ismaster')
        print("SUCCESS: Connected to MongoDB Atlas!")
        
        # List databases
        dbs = client.list_database_names()
        print(f"Available databases: {dbs}")
        
        return True
        
    except Exception as e:
        print(f"ERROR: Could not connect to MongoDB: {e}")
        print("\nTroubleshooting tips:")
        print("1. Check your connection string in the .env file")
        print("2. Make sure your IP is whitelisted in MongoDB Atlas")
        print("3. Verify your username and password are correct")
        print("4. Check if your cluster is fully deployed (can take 5-10 minutes)")
        return False

if __name__ == "__main__":
    test_mongodb_connection()
