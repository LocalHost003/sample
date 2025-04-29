pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "mern_project"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/LocalHost003/sample.git', branch: 'main'
            }
        }

        stage('Clean Up Docker') {
            steps {
                bat 'docker-compose down || exit 0'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }

        stage('Health Check') {
            steps {
                script {
                    def result = bat(script: 'curl -s http://localhost:3000', returnStatus: true)
                    if (result != 0) {
                        error("Health check failed! Client app is not responding.")
                    }
                }
            }
        }
    }

    post {
        failure {
            echo "Build failed. Cleaning up containers..."
            bat 'docker-compose down'
        }
    }
}
