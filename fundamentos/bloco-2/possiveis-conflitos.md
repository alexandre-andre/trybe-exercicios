# error: git src refspec master does not match any solution

Is need to add a file to a commit before you can push your changes to a remote Git repository. If you create a new repository and forget to add a file to a commit, you may encounter the “src refspec master does not match any” error.

In this guide, will be discuss  what this error means and why it is raised. 

when we create ours first Git repository, the repository has no commit history yet.

The workflow for pushing a change to a repository looks like this:
1. cahnge a file
2. add the file to the staging area
3. create a commit

An example scenario
```
mkdir projetc1
cd project1
```

now that we have our folder ready, we can initialize a Git repository
```javascript
git init
git remote add origin <ssh or http>
git add .
git push -u origin master
// error: src refspec master does not match any.
```

## The solution
Create a initial commit before push the code to remote repositiry
```
git commit -m '<message>'
```


# error: failed to push some refs
The error happen because the remote repository contains works that don't exist locally. So we may first integrate the remote changes before push again.

If we try to climb changes to a remote git, however on the remote server there are newer changes then our wich we stilldo not have in our location. So before making the `push` we need to do the `pull`.

## The solution
Update the local repository with the changes from the remote repository.
```
git checkout <branch> && git pull origin <branch>
```