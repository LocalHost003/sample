pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "mern_project"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'git@github.com:LocalHost003/sample.git', branch: 'main'
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
                    def retries = 10
                    def success = false

                    for (int i = 0; i < retries; i++) {
                        def result = bat(script: 'curl --fail -s http://localhost:3000', returnStatus: true)
                        if (result == 0) {
                            echo "✅ Client app is up and running!"
                            success = true
                            break
                        } else {
                            echo "⏳ Waiting for client app... retry ${i+1}/${retries}"
                            sleep(time: 5, unit: 'SECONDS')
                        }
                    }

                    if (!success) {
                        error("❌ Health check failed! Client app is not responding after ${retries} attempts.")
                    }
                }
            }
        }
    }

    post {
        failure {
            echo "🧹 Build failed. Cleaning up containers..."
            bat 'docker-compose down'
        }
    }
}
