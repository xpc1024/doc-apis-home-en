---
title: PR
date: 2023-03-18 10:00:00
permalink: /pages/7d828w/
---

Welcome to join us in contributing to the doc-apis project, making it better together.

## Requirements

Many community members are eager to contribute to this project. If you want to participate in development and become a committer, here are the requirements:


* You need to be passionate about open source, have solid technical skills, and a heart willing to contribute your time and effort out of love for the project.

* You should have some spare time available to engage in development and code reading.

* Your commitment should be consistent and not just a fleeting interest.

## How to Join the Development Team

First, you need to join the doc-apis community group. For details on how to join, refer to Join Community Discussion, then send me a private message expressing your interest in becoming a developer.After contributing valuable PRs (Pull Requests), I will add you to the developers team.

## How to Claim Tasks

I will periodically push out some issues in the developers team group, using a self-claiming system.To claim an issue, simply reply with “Claimed” under the relevant issue; there is no need to respond in the group. If someone else has already claimed it, do not claim it again.You can claim tasks from the demand pool and planned features, or you can also take the initiative to develop any feature you believe adds value, and try pushing it forward.

## Submitting PR

PRs for doc-apis are submitted uniformly on the GitHub platform. If you don't know how to submit a PR, you can ask Baidu or AI for help; we won't cover that process here.Here are some points to note when submitting PRs:

* After forking, switch to the `feature`󠁪 branch, and use this branch as your development baseline.
* All PRs should be submitted to the `feature` branch, which is the development branch.
*  If you make functional changes, please include your test cases. The test case specifications can be referenced from previous test cases.
* All PRs must be associated with at least one issue. If there is no related issue, create one yourself.
*  Before officially submitting a PR, ensure that all test cases pass.
* Commit messages must adhere to certain requirements, which are explained below.

## Requirements for Annotations and Comments

At the top of the file, there must be relevant header comment information. Please follow the standard shown below:
```java
/**
 * This is your description of this class, if it's long, multiple lines are acceptable.
 * @author Lao Han
 * @since 2.6.4
 */
public class YourClass{
	// your codes
}
```

For important code sections, to ensure readability, please add necessary comments and try to adhere to the Alibaba Code Development Guidelines.

When submitting, comments should also be filled out according to standards:
```
#bug/future/enhancement/ #issue number This is the Chinese description of your issue
```
eg：
```
enhancement #I595MU Add execution time and success result for each component in the slot metadata

```

## Points to Consider When Coding

The quality requirements for open-source framework code are relatively high. It's not just about implementation but also considering compatibility across different environments, elegance, and readability.Therefore, when coding, think more. I believe that high standards and strict requirements can shape an excellent framework, which will also be very beneficial to your future technical growth.During code merging, I will provide modification suggestions under the PR, which may be quite stringent, almost nitpicking. Please understand that this is entirely focused on code quality and not directed at any individual. To ensure the long-term development of an open-source project, code quality must be strictly controlled; otherwise, with so many developers, each with their own style, the project will eventually become difficult to maintain.

## A Word to Committers

Upon thoroughly understanding the code and completing an issue that gets merged into the master branch, I will invite you to become a Committer of Easy-Es, typically extending invitations collectively before a release.Although in principle, only one issue needs to be completed, issues themselves vary in difficulty. However, I hope that as a contributor, you don't settle for submitting just one issue. I hope you can become a long-term Committer, actively participating in the iteration, development, and decision-making discussions of the doc-apis framework. Only by doing so can the open-source framework thrive, and open-source contributions can serve as a path for your growth and technical advancement.


