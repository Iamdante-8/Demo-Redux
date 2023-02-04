# Demo-Redux
#ignore all .txt files
# git video link:https://www.youtube.com/watch?v=tRZGeaHPoaw
# Git is an open and free source management(scm) manage file 
changes over time
#GIT COMMANDS
- git config --global user.name "name"
-git config --global user.email example@email.com
- git conig --global init.default branch <branch_name>
# To ask for help on git config command then use command git config -h 
 OR -COMMAND git help config
 # to turn a project to git repository use command:
 git init
 # To show the status of our repository us e command
 git status
 # To add tracked files use command
 git add <file_name.extension>
 # To remove the file from being tracked use command
 git rm --cached <file_name.extension>
 # To ignore the file from being tracked create .gitignore file using command:
 git touch .gitignore then inside the .gitignore file use:
 example to ignore say all .txt files use: *(asterik).txt(i.e extension)
 # To track all the other files use command:
git add --all OR git add -A OR git add .
# To keep the current status of a file(history) so that can refer to it in the future use command(commit):
git commit -m "first commit -commiting all files to a repository"
-- View the status of the a file use command:
git status
# To know the what was changed in a file after the commit use command then use commit back the file to the repository:
git diff then git commit<file_name>
# After the changes have been made to a file it stayes on a 
staged file until you're ready to commit them
In short git have three environment
* Working_file
* Staging_file
* Commit_file
# If you want to restore a staged file use ccommand;
 git restore --staged <file_name>
 # If to commit files that are in the staged environment use command:
 git commit -a -m "comment"
 # if you want to remove(delete) a file from our environments use command:
 git rm <file_name>
 # To restore the deleted file to our working directory use command:
 git restore "<file_name>"
 # To rename a file use command:
 git mv "current_file_name" "new_file_name"
 # To review all commit that have been made use command:
 git log OR git log --oneline
 -- you will be able to see the commit wit a unique identifier and
 the author name and email, date and comment passed during commit command
 # To cahnge the comment on the commited files use command:
 git commit -m "The new statement" --amend
 # To review what actually changed during the commit use command:
 git log -p
 # To view all git log commands use command:
 git log help
 # To quit a rebase use command:
 git rebase --quit
 # To create new branch use command:
 git branch fixBug
 --To view how many branch we have use command :
 git branch
 --To switch from one branch to another use command:
 git switch <branch_name>
# To merge created_branch back to main use command:
git merge -m "comment" created_branch_name
/*
git remote git fetch git push git pull
The git pull command is used to fetch and download content 
from a remote repository and immediately update the local repository to match that content. 
Merging remote upstream changes into your local repository is a common task in Git-based collaboration work flows.
The git pull command is actually a combination of two other commands, git fetch followed by git merge. 
In the first stage of operation git pull will execute a git fetch scoped to the local branch that HEAD is pointed at. 
Once the content is downloaded, git pull will enter a merge workflow. 
A new merge commit will be-created and HEAD updated to point at the new commit.
   */
# To delete a branch after a merge use command:
git branch -d branch_name
# You have a merge conflict ***







