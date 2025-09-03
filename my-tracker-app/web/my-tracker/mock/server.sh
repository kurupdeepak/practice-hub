echo Container args are: "$@"
echo "Running json server with --watch mock-data.json --host 0.0.0.0"
json-server --watch mockdb.json --host 0.0.0.0
