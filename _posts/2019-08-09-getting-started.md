---
title: Getting Started
<<<<<<< HEAD
author: Cotes Chung
=======
author: cotes
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
date: 2019-08-09 20:55:00 +0800
categories: [Blogging, Tutorial]
tags: [getting started]
pin: true
---

## Prerequisites

<<<<<<< HEAD
Follow the [Jekyll Docs](https://jekyllrb.com/docs/installation/) to complete the installation of `Ruby`, `RubyGems`, `Jekyll` and `Bundler`. Please note that the version of `Ruby` must meet the requirements of the theme on [RubyGems.org](https://rubygems.org/gems/jekyll-theme-chirpy).

## Installation

There are two ways to get the theme:

- **[Install from RubyGems](#install-from-rubygems)** - Easy to update, isolate irrelevant project files so you can focus on writing.
- **[Fork on GitHub](#fork-on-github)** - Convenient for custom development, but difficult to update, only suitable for web developers.

### Install from RubyGems

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-chirpy"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-chirpy
```

And then execute:

```console
$ bundle
```

Next, go to the installed local theme path:

```console
$ cd "$(bundle info --path jekyll-theme-chirpy)"
```

And then copy the critical files (for details, see [starter project][starter]) from the theme's gem to your Jekyll site.

> ⚠️ **Watch out for duplicate files!**
>
> If your Jekyll site is created by the `jekyll new` command, there will be `index.markdown` and `about.markdown` in the root directory of your site. Please be sure to remove them, otherwise they will overwrite the `index.html` and `_tabs/about.html` from this project, resulting in blank or messy pages.

As an alternative, which we recommend, you can create a Jekyll site [**using the starter template**][use-starter] to save time copying files from the theme's gem. We've prepared everything you need there!

### Fork on GitHub

[Fork **Chirpy**](https://github.com/cotes2020/jekyll-theme-chirpy/fork) on GitHub and then clone your fork to local. (Please note that the default branch code is in development.  If you want the blog to be stable, please switch to the [latest tag](https://github.com/cotes2020/jekyll-theme-chirpy/tags) and start writing.)

Install gem dependencies by:

```console
$ bundle
```
=======
Follow the instructions in the [Jekyll Docs](https://jekyllrb.com/docs/installation/) to complete the installation of `Ruby`, `RubyGems`, `Jekyll`, and `Bundler`. In addition, [Git](https://git-scm.com/) is also required to be installed.

## Installation

### Creating a New Site

There are two ways to create a new repository for this theme:

- [**Using the Chirpy Starter**](#option-1-using-the-chirpy-starter) - Easy to upgrade, isolates irrelevant project files so you can focus on writing.
- [**Forking on GitHub**](#option-2-forking-on-github) - Convenient for custom development, but difficult to upgrade. Unless you are familiar with Jekyll and are determined to tweak or contribute to this project, this approach is not recommended.

#### Option 1. Using the Chirpy Starter

Create a new repository from the [**Chirpy Starter**][use-starter] and name it `<GH_USERNAME>.github.io`, where `GH_USERNAME` represents your GitHub username.

#### Option 2. Forking on GitHub

[Fork **Chirpy**](https://github.com/cotes2020/jekyll-theme-chirpy/fork) on GitHub and rename it to `<GH_USERNAME>.github.io`. Please note that the default branch code is in development.  If you want the site to be stable, please switch to the [latest tag][latest-tag] and start writing.
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

And then execute:

```console
$ bash tools/init.sh
```

<<<<<<< HEAD
> **Note**: If you don't plan to deploy your site on GitHub Pages, append parameter option `--no-gh` at the end of the above command.

What it does is:

1. Remove some files or directories from your repository:
    - `.travis.yml`
    - files under `_posts`
    - folder `docs`

2. If you use the `--no-gh` option, the directory `.github` will be deleted. Otherwise, setup the GitHub Action workflow by removing the extension `.hook` of `.github/workflows/pages-deploy.yml.hook`, and then remove the other files and directories in the folder `.github`.

3. Automatically create a commit to save the changes.
=======
> If you don't want to deploy your site on GitHub Pages, append option `--no-gh` at the end of the above command.
{: .prompt-info }

The above command will:

1. Removes some files or directories from your repository:
    - `.travis.yml`{: .filepath}
    - files under `_posts`{: .filepath}

2. If the option `--no-gh` is provided, the directory `.github`{: .filepath} will be deleted. Otherwise, set up the GitHub Action workflow by removing the extension `.hook`{: .filepath} of `.github/workflows/pages-deploy.yml.hook`{: .filepath}, and then remove the other files and directories in the folder `.github`{: .filepath}.

3. Removes item `Gemfile.lock` from `.gitignore`{: .filepath}.

4. Creates a new commit to save the changes automatically.

### Installing Dependencies

Before running for the first time, go to the root directory of your site, and install dependencies as follows:

```console
$ bundle
```
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

## Usage

### Configuration

<<<<<<< HEAD
Update the variables of `_config.yml` as needed. Some of them are typical options:
=======
Update the variables of `_config.yml`{: .filepath} as needed. Some of them are typical options:
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

- `url`
- `avatar`
- `timezone`
- `lang`

### Customing Stylesheet

<<<<<<< HEAD
If you need to customize stylesheet, copy the theme's `assets/css/style.scss` to the same path on your Jekyll site, and then add the custom style at the end of the style file.

Starting from `v4.1.0`, if you want to overwrite the SASS variables defined in `_sass/addon/variables.scss`, create a new file `_sass/variables-hook.scss` and assign new values to the target variable in it.
=======
If you need to customize the stylesheet, copy the theme's `assets/css/style.scss`{: .filepath} to the same path on your Jekyll site, and then add the custom style at the end of the style file.

Starting from [`v4.1.0`][chirpy-4.1.0], if you want to overwrite the SASS variables defined in `_sass/addon/variables.scss`{: .filepath}, create a new file `_sass/variables-hook.scss`{: .filepath} and assign new values to the target variable in it.

### Customing Static Assets

Static assets configuration was introduced in version `5.1.0`. The CDN of the static assets is defined by file `_data/assets/cross_origin.yml`{: .filepath }, and you can replace some of them according to the network conditions in the region where your website is published.

Also, if you'd like to self-host the static assets, please refer to the [_chirpy-static-assets_](https://github.com/cotes2020/chirpy-static-assets#readme).
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

### Running Local Server

You may want to preview the site contents before publishing, so just run it by:

```console
$ bundle exec jekyll s
```

Or run the site on Docker with the following command:

<<<<<<< HEAD
```terminal
=======
```console
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
$ docker run -it --rm \
    --volume="$PWD:/srv/jekyll" \
    -p 4000:4000 jekyll/jekyll \
    jekyll serve
```

<<<<<<< HEAD
Open a browser and visit to _<http://localhost:4000>_.

### Deployment

Before the deployment begins, checkout the file `_config.yml` and make sure the `url` is configured correctly. Furthermore, if you prefer the [**project site**](https://help.github.com/en/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites) and don't use a custom domain, or you want to visit your website with a base URL on a web server other than **GitHub Pages**, remember to change the `baseurl` to your project name that starting with a slash, e.g, `/project-name`.

Now you can choose ONE of the following methods to deploy your Jekyll site.

#### Deploy on GitHub Pages

For security reasons, GitHub Pages build runs on `safe` mode, which restricts us from using plugins to generate additional page files. Therefore, we can use **GitHub Actions** to build the site, store the built site files on a new branch, and use that branch as the source of the GH Pages service.

Quickly check the files needed for GitHub Actions build:

- Ensure your Jekyll site has the file `.github/workflows/pages-deploy.yml`. Otherwise, create a new one and fill in the contents of the [workflow file][workflow], and the value of the `on.push.branches` should be the same as your repo's default branch name.
- Ensure your Jekyll site has file `tools/test.sh` and `tools/deploy.sh`. Otherwise, copy them from this repo to your Jekyll site.

And then rename your repository to `<GH-USERNAME>.github.io` on GitHub.
=======
After a while, the local service will be published at _<http://127.0.0.1:4000>_.

## Deployment

Before the deployment begins, check out the file `_config.yml`{: .filepath} and make sure the `url` is configured correctly. Furthermore, if you prefer the [**project site**](https://help.github.com/en/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites) and don't use a custom domain, or you want to visit your website with a base URL on a web server other than **GitHub Pages**, remember to change the `baseurl` to your project name that starts with a slash, e.g, `/project-name`.

Now you can choose ONE of the following methods to deploy your Jekyll site.

### Deploy by Using Github Actions

For security reasons, GitHub Pages build runs on `safe` mode, which restricts us from using plugins to generate additional page files. Therefore, we can use **GitHub Actions** to build the site, store the built site files on a new branch, and use that branch as the source of the GitHub Pages service.

Quickly check the files needed for GitHub Actions build:

- Ensure your Jekyll site has the file `.github/workflows/pages-deploy.yml`{: .filepath}. Otherwise, create a new one and fill in the contents of the [sample file][workflow], and the value of the `on.push.branches` should be the same as your repo's default branch name.

- Ensure your Jekyll site has file `tools/deploy.sh`{: .filepath}. Otherwise, copy it from here to your Jekyll site.

- Furthermore, if you have committed `Gemfile.lock`{: .filepath} to the repo, and your runtime system is not Linux, don't forget to update the platform list in the lock file:

  ```console
  $ bundle lock --add-platform x86_64-linux
  ```

After the above steps, rename your repository to `<GH_USERNAME>.github.io` on GitHub.
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

Now publish your Jekyll site by:

1. Push any commit to remote to trigger the GitHub Actions workflow. Once the build is complete and successful, a new remote branch named `gh-pages` will appear to store the built site files.

<<<<<<< HEAD
2. Browse to your repo's landing page on GitHub and select the branch `gh-pages` as the [publishing source](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) through _Settings_ → _Options_ → _GitHub Pages_:

    ![gh-pages-sources](https://cdn.jsdelivr.net/gh/cotes2020/chirpy-images/posts/20190809/gh-pages-sources.png){: width="850" height="153" }

3. Visit your website at the address indicated by GitHub.

#### Deploy on Other Platforms

On platforms other than GitHub, we cannot enjoy the convenience of **GitHub Actions**. Therefore, we should build the site locally (or on some other 3rd-party CI platform) and then put the site files on the server.

Go to the root of the source project, build your site by:
=======
2. Browse to your repository on GitHub. Select the tab _Settings_, then click _Pages_ in the left navigation bar, and then in the section **Source** of _GitHub Pages_, select the `/(root)` directory of branch `gh-pages` as the [publishing source][pages-src]. Remember to click <kbd>Save</kbd> before leaving.

    ![gh-pages-sources](/posts/20190809/gh-pages-sources.png){: width="1580" height="250" }

3. Visit your website at the address indicated by GitHub.

### Manually Build and Deploy

On self-hosted servers, you cannot enjoy the convenience of **GitHub Actions**. Therefore, you should build the site on your local machine and then upload the site files to the server.

Go to the root of the source project, and build your site as follows:
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

```console
$ JEKYLL_ENV=production bundle exec jekyll b
```

<<<<<<< HEAD
Or build the site with Docker by:

```terminal
=======
Or build the site on Docker:

```console
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
$ docker run -it --rm \
    --env JEKYLL_ENV=production \
    --volume="$PWD:/srv/jekyll" \
    jekyll/jekyll \
    jekyll build
```

<<<<<<< HEAD
Unless you specified the output path, the generated site files will be placed in folder `_site` of the project's root directory. Now you should upload those files to your web server.
=======
Unless you specified the output path, the generated site files will be placed in folder `_site`{: .filepath} of the project's root directory. Now you should upload those files to the target server.

## Upgrading

It depends on how you use the theme:

- If you are using the theme gem (there will be `gem "jekyll-theme-chirpy"` in the `Gemfile`{: .filepath}), editing the `Gemfile`{: .filepath} and update the version number of the theme gem, for example:

  ```diff
  - gem "jekyll-theme-chirpy", "~> 3.2", ">= 3.2.1"
  + gem "jekyll-theme-chirpy", "~> 3.3", ">= 3.3.0"
  ```
  {: .nolineno file="Gemfile" }

  And then execute the following command:

  ```console
  $ bundle update jekyll-theme-chirpy
  ```

  As the version upgrades, the critical files (for details, see the [Startup Template][starter]) and configuration options will change. Please refer to the [Upgrade Guide](https://github.com/cotes2020/jekyll-theme-chirpy/wiki/Upgrade-Guide) to keep your repo's files in sync with the latest version of the theme.

- If you forked from the source project (there will be `gemspec` in the `Gemfile`{: .filepath} of your site), then merge the [latest upstream tags][latest-tag] into your Jekyll site to complete the upgrade.
The merge is likely to conflict with your local modifications. Please be patient and careful to resolve these conflicts.
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

[starter]: https://github.com/cotes2020/chirpy-starter
[use-starter]: https://github.com/cotes2020/chirpy-starter/generate
[workflow]: https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/.github/workflows/pages-deploy.yml.hook
<<<<<<< HEAD
=======
[chirpy-4.1.0]: https://github.com/cotes2020/jekyll-theme-chirpy/releases/tag/v4.1.0
[pages-src]: https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
[latest-tag]: https://github.com/cotes2020/jekyll-theme-chirpy/tags
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
