#!/bin/bash

echo "Starting Portfolio Dev Environment..."

# Start backend
cd backend
source .venv/Scripts/activate
uvicorn app.main:app --reload &
BACKEND_PID=$!
echo "Backend running on http://localhost:8000"

# Start frontend
cd ../frontend
npm run dev &
FRONTEND_PID=$!
echo "Frontend running on http://localhost:5174"

# Open browser
sleep 3
start "" "http://localhost:5174"

echo ""
echo "Dev environment ready"
echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo ""
echo "Press Ctrl+C to stop everything"

# Keep script running and kill both on exit
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT
wait