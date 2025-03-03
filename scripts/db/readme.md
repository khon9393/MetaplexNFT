
# install PostgreSQL Client (psql)
# Update Package List
sudo apt update

# Option 1: Install Only PostgreSQL Client (psql)
sudo apt install postgresql-client

 # Verify Installation
 psql --version

 # run script for .env
# 1. Make it executable:
chmod +x scripts/export_env.sh

# Run the script:
./scripts/export_env.sh

# Check the .env file:
cat .env