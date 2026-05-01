let Kvadrat = (a)=> {
    return a**2
}

export {Kvadrat}

PS C:\Users\user\Desktop\loyiha\ForLearning> git pull
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 8 (delta 1), reused 6 (delta 1), pack-reused 0 (from 0)
Unpacking objects: 100% (8/8), 1.41 KiB | 12.00 KiB/s, done.
From https://github.com/AzizbekDev-ars/ForLearning
   2dfd124..87336da  deleteProduct -> origin/deleteProduct
   f3a7306..f901857  main          -> origin/main
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> dastonbek

PS C:\Users\user\Desktop\loyiha\ForLearning> git checkout main 
Switched to branch 'main'
Your branch is behind 'origin/main' by 3 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
PS C:\Users\user\Desktop\loyiha\ForLearning> git pull
Updating f3a7306..f901857
Fast-forward
 data/db.js                 |  2 --
 models/Product.js          | 12 ------------
 models/User.js             | 12 ------------
 server.js                  | 22 ----------------------
 services/ProductService.js | 28 ----------------------------
 services/UserServices.js   | 28 ----------------------------
 utils/logger.js            |  3 ---
 7 files changed, 107 deletions(-)
 delete mode 100644 data/db.js
 delete mode 100644 models/Product.js
 delete mode 100644 models/User.js
 delete mode 100644 server.js
 delete mode 100644 services/ProductService.js
 delete mode 100644 services/UserServices.js
 delete mode 100644 utils/logger.js
PS C:\Users\user\Desktop\loyiha\ForLearning> git branch uchburchak
PS C:\Users\user\Desktop\loyiha\ForLearning> git checkout uchburchak
Switched to branch 'uchburchak'
PS C:\Users\user\Desktop\loyiha\ForLearning> git add .
PS C:\Users\user\Desktop\loyiha\ForLearning> git commit -m "uchburchakni yuzi
>> ^C
PS C:\Users\user\Desktop\loyiha\ForLearning> ^C
PS C:\Users\user\Desktop\loyiha\ForLearning> git commit -m "uchburchakni yuzi"
On branch uchburchak
nothing to commit, working tree clean
PS C:\Users\user\Desktop\loyiha\ForLearning> git push origin uchburchak
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'uchburchak' on GitHub by visiting:
remote:      https://github.com/AzizbekDev-ars/ForLearning/pull/new/uchburchak
remote: 
To https://github.com/AzizbekDev-ars/ForLearning.git
 * [new branch]      uchburchak -> uchburchak
PS C:\Users\user\Desktop\loyiha\ForLearning> git push        
fatal: The current branch uchburchak has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin uchburchak

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\user\Desktop\loyiha\ForLearning> git branch -a
  dastonbek
  main
* uchburchak
  remotes/origin/HEAD -> origin/main
  remotes/origin/dastonbek
  remotes/origin/deleteProduct
  remotes/origin/main
  remotes/origin/uchburchak
PS C:\Users\user\Desktop\loyiha\ForLearning> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\user\Desktop\loyiha\ForLearning> git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 3 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (4/4), 1.12 KiB | 21.00 KiB/s, done.
From https://github.com/AzizbekDev-ars/ForLearning
   f901857..1a97d4c  main       -> origin/main
 * [new branch]      Kvadrat    -> origin/Kvadrat
Updating f901857..1a97d4c
Fast-forward
 Kvadrat.js | 5 +++++
 1 file changed, 5 insertions(+)
 create mode 100644 Kvadrat.js
PS C:\Users\user\Desktop\loyiha\ForLearning> git checkout uchburchak
Switched to branch 'uchburchak'
PS C:\Users\user\Desktop\loyiha\ForLearning> git add .
PS C:\Users\user\Desktop\loyiha\ForLearning> git commit -m "uchuburchak yuzi"
On branch uchburchak
nothing to commit, working tree clean
PS C:\Users\user\Desktop\loyiha\ForLearning> git push
fatal: The current branch uchburchak has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin uchburchak

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\user\Desktop\loyiha\ForLearning> git push origin uchburchak
Everything up-to-date
PS C:\Users\user\Desktop\loyiha\ForLearning> ^C  
PS C:\Users\user\Desktop\loyiha\ForLearning> ^C
PS C:\Users\user\Desktop\loyiha\ForLearning> ^C
PS C:\Users\user\Desktop\loyiha\ForLearning> git init
Reinitialized existing Git repository in C:/Users/user/Desktop/loyiha/ForLearning/.git/
PS C:\Users\user\Desktop\loyiha\ForLearning> git branch
  dastonbek
  main
* uchburchak
PS C:\Users\user\Desktop\loyiha\ForLearning> git add .
PS C:\Users\user\Desktop\loyiha\ForLearning> git commit -m "o'zgarish"
On branch uchburchak
nothing to commit, working tree clean
PS C:\Users\user\Desktop\loyiha\ForLearning> git push -u origin uchburchak
branch 'uchburchak' set up to track 'origin/uchburchak'.
Everything up-to-date
PS C:\Users\user\Desktop\loyiha\ForLearning> git add .
PS C:\Users\user\Desktop\loyiha\ForLearning> git commit -m "gfds"
On branch uchburchak
Your branch is up to date with 'origin/uchburchak'.

nothing to commit, working tree clean
PS C:\Users\user\Desktop\loyiha\ForLearning> git checkout origin/uchburchak
Note: switching to 'origin/uchburchak'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at f901857 Delete server.js
PS C:\Users\user\Desktop\loyiha\ForLearning> git branch
* (HEAD detached at origin/uchburchak)
  dastonbek
  main
  uchburchak
PS C:\Users\user\Desktop\loyiha\ForLearning> git checkout uchburchak
Switched to branch 'uchburchak'
Your branch is up to date with 'origin/uchburchak'.
PS C:\Users\user\Desktop\loyiha\ForLearning> git add .
PS C:\Users\user\Desktop\loyiha\ForLearning> git commit -m "fdsa"
On branch uchburchak
Your branch is up to date with 'origin/uchburchak'.

nothing to commit, working tree clean
PS C:\Users\user\Desktop\loyiha\ForLearning> git push -u origin uchburchak
branch 'uchburchak' set up to track 'origin/uchburchak'.
Everything up-to-date
PS C:\Users\user\Desktop\loyiha\ForLearning> 
