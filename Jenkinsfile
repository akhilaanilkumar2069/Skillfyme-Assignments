pipeline{

  agent any

  tools{

    maven 'mymaven'

	}

  stages{

    stage ('Clone the repo')

	{

      steps{

	  git 'https://github.com/DevopsAkhila/MavenBuild-Docker-GitHubActions.git'

	  }

	}

	stage('Build the javaapp'){

      steps{

        sh 'mvn clean install' 

      }

    }

    stage('Build the dockerfile'){

      steps{

        sh 'docker build -t myjavaapp:latest .'

      }

    }

    stage('Push the docker image'){

    steps{
		withCredentials([usernamePassword(
    credentialsId: 'DOCKERHUB_USERNAME',
    usernameVariable: 'DOCKER_USER',
    passwordVariable: 'DOCKER_PASS'
)]) {
    sh '''
    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
    '''
}
		sh '''

	   docker tag myjavaapp devopsakhila/myjavaapp

	   docker push devopsakhila/myjavaapp

	   '''

	   }

	   }

	stage('Deploy the app on docker container'){

	steps{

	   sh 'docker run -d -P --name=myjavaapplication devopsakhila/myjavaapp'

	   }

	   }
  }
}
