#!/bin/bash
/edx/app/edxapp/venvs/edxapp/bin/pip install git+https://github.com/wwj718/youkuXBlock.git
sed '/"FEATURES": {/a\        "ALLOW_ALL_ADVANCED_COMPONENTS": true,'  -i /edx/app/edxapp/cms.env.json
#sudo /edx/bin/supervisorctl restart edxapp:
