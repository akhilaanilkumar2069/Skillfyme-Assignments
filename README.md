# Skillfyme-Assignments
Assignment-Push images to Amazon ECR

1. Login to AWS Console and navigate to ECR service.
2. Click on "create repositry"
   <img width="1919" height="906" alt="image" src="https://github.com/user-attachments/assets/5f80ec54-2f22-4507-8d10-583df53c8bc3" />
3. Give the name to the repositry in the format namespace/repositoryname. I have given demonamespace/catevoterepo
<img width="1914" height="802" alt="image" src="https://github.com/user-attachments/assets/ae7f0c14-42f8-4551-ba4b-aa681f19d2b2" />
4. Set the image tag settings to mutable and encryption settings as is.
5. Click on create
Now you can see the repo created
<img width="1919" height="545" alt="image" src="https://github.com/user-attachments/assets/dfa82c3b-e925-498f-84f7-00049dc8fac5" />
6. Tag the castvoteimage you have on your dockerhost to ECR: **docker tag castvote:latest 801734119400.dkr.ecr.us-east-1.amazonaws.com/demonamespace/castvoterepo:latest**
7. Configure AWS CLI by running **aws configure** on the machine and pass the accesskey and secret key
8. Login to ECR from dockerhost:
  ** aws ecr get-login-password --region us-east-1 | \
docker login --username AWS --password-stdin 801734119400.dkr.ecr.us-east-1.amazonaws.com**
9. Push the image to the repository
 **  docker push  801734119400.dkr.ecr.us-east-1.amazonaws.com/demonamespace/castvoterepo:latest**
<img width="1564" height="433" alt="image" src="https://github.com/user-attachments/assets/f6d7d45f-c932-427b-bd97-eb76a69503d9" />

 Now you can see your image in the ECR Images tab.
    <img width="1919" height="730" alt="image" src="https://github.com/user-attachments/assets/10d888ae-7410-442e-bc3d-0299c3d2d6a6" />
