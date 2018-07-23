# Contributing to Subchannel

## Project Management Tools

In order to align as a team, tools used to collaborate are formalized here:

1. JIRA - Issue Tracking
1. Twist - Asynchronous Communication
1. Github - Code Collaboration and Project Management
1. GMail - Email Communication
1. Zoom Video Communications - Virtual Meetings

Please stick to using the tools above for the lifespan of the project.

## Sprints

Sprints are weekly and are planned out during the start of the week. When the project evolves to a point where there is a more permanent team developing features then a more specific date and time will be set for sprint planning.

## Retros

Retros, or retrospectives, occur at the end of each sprint. They are a time for the team to reflect on what went well, what did not go well, and figure out where changes need to be made. When each sprint ends, the repository's changelog will be updated to document what was accomplished for the past sprint in relation to Github pull requests, merges, and issues. A summary will be written about the sprint to document findings and learnings from the previous sprint. This will guide the planning for the upcoming sprint.

## Culture

It is imperative that each team member speak their mind and feel comfortable enough to raise concerns. This includes giving feedback, constructive criticism, and affirmation. There are effective ways in communicating as well as ineffective ways. It is encouraged that each member of the team familiarize themselves with the concept of radical candor. Let's do our best to provide meaningful, direct, factual, and empathetic feedback to others. This will help each team member grow by leaps and bounds professionally as well as personally and truly make Subchannel an incredible place to work.

References:

1. Radical Candor - [https://www.radicalcandor.com/](https://www.radicalcandor.com/)

## Issue

Please read the documentation in [ISSUE_TEMPLATE.md](./ISSUE_TEMPLATE.md) before submitting an issue.

## Pull Request

Please read the documentation in [PULL_REQUEST_TEMPLATE.md](./PULL_REQUEST_TEMPLTE.md) before creating a pull request. Pull request should be _reviewed within 24 hours_ once it is labeled `ready for review`. It is important that PRs are reviewed as soon as possible in order to reduce context switching and maintain velocity. In order to provide a cleaner git commit history, please rebase your branch with `development` branch before merging your PR. This adds your commits on top of `development` and creates a more clear and linear commit history.

## Branching

Developers should be working off of branches when contributing to the project. For example, if you are working on the settings view you would create a branch called `feature/settings-view`. It helps to be even more granular though. If the task you are working on is connected to a JIRA ticket, or Github issue, then reference that in your branch name. For example, if you are working on fixing a bug in the settings view and there is a related JIRA ticket then you would call your branch `fix/sub-81-settings-view`. Comparatively, if it was a Github issue you would call it `fix/issue-287-settings-view`. Common branch names are:

1. `feature`
1. `fix`
1. `bug`
1. `internal`
1. `experimental`
1. `docs`

References:

1. A successful Git branching model - [http://nvie.com/posts/a-successful-git-branching-model/](http://nvie.com/posts/a-successful-git-branching-model/)
1. Git branching and tagging best practices - [https://softwareengineering.stackexchange.com/questions/165725/git-branching-and-tagging-best-practices](https://softwareengineering.stackexchange.com/questions/165725/git-branching-and-tagging-best-practices)
1. Git Feature Branch Workflow - [https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
1. Learn Git Branching - [https://learngitbranching.js.org/](https://learngitbranching.js.org/)

## Code Commits

Committing code is an art form in and of itself. Writing a good commit message helps convey what changes were made and allows passerby developers to gain context quickly. Commit messages can also tell a story. This requires a bit more time and diligence on the part of the developer to clean up their commit history to do this but it is possible. For example, through using `git rebase -i`. The only requirement for this project, however, is that you write sensible commit messages that demarcate one chunk of work from another.

Be sure to commit often and push your changes to the Github repository every day. This ensures that if your computer gets lost or stolen the commits can still be retrieved from the remote branch. JIRA will track branches if you add the ticket number into the commit message.

Any commit message (example shown below) including the JIRA Ticket ID in it will automatically resolve and change the status of the ticket. Developers can also view the commit information directly from the JIRA ticket.

Example:

```bash
git commit -m "PROJ-123 add a README file to the project."
git push origin
```

References:

1. How to Write a Git Commit Message - [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)
1. Don't Be Scare of git rebase - [https://nathanleclaire.com/blog/2014/09/14/dont-be-scared-of-git-rebase/](https://nathanleclaire.com/blog/2014/09/14/dont-be-scared-of-git-rebase/)

## Merging

Merging is the responsbility of the developer who created the PR. After the PR has been reviewed and approved by two `CODEOWNERS` of the project the developer can merge their changes into development. It is encouraged that the developer merge to development without fast-fowarding. This allows the Git commits to form a chronological order. From the command line this would look like:

1. `git checkout development`
1. `git merge feature/settings --no-ff`

From the Github pull request page it's as simple as clicking the `Merge Pull Request` button. If you have any questions about merging please refer to an experienced developer.

References:

1. Merging a Pull Request - [https://help.github.com/articles/merging-a-pull-request/](https://help.github.com/articles/merging-a-pull-request/)
