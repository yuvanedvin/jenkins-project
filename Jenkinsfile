pipeline {
    agent any

    environment {
        GIT_REPO = 'https://github.com/yuvanedvin/jenkins-project.git'
        GIT_BRANCH = 'main'
        DESTINATION_SERVER = 'root@13.201.191.163'
        DESTINATION_PATH = '/var/www/html/'
        RSYNC_PARAMS = "-zarvh --exclude '.git'"
        SSH_CREDENTIALS_ID = 'bf503685-bd77-4a04-80d7-5a0850eeed78' // Replace this with your real Jenkins SSH credential ID
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: "${GIT_REPO}", branch: "${GIT_BRANCH}"
            }
        }

        stage('Deploy using rsync') {
            steps {
                sshagent (credentials: ["${SSH_CREDENTIALS_ID}"]) {
                    sh '''
                        echo "Deploying to remote server using rsync..."
                        rsync $RSYNC_PARAMS ./ $DESTINATION_SERVER:$DESTINATION_PATH
                    '''
                }
            }
        }
    }
}
