# Pipeline
1. Commit on Master branch
2. CircleCI runs deployment
    1. Sets up Environment Variables from CircleCI
    2. Setups environment (i.e. Install node, AWS CLI, EB CLI, etc)
    3. Installs dependencies for Frontend and Backend
    4. Runs build script for Frontend and Backend
    5. Runs test scripts
    6. Frontend deploy
    7. Backend deploy