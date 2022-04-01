# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-chirpy"
<<<<<<< HEAD
  spec.version       = "4.1.0"
=======
  spec.version       = "5.1.0"
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
  spec.authors       = ["Cotes Chung"]
  spec.email         = ["cotes.chung@gmail.com"]

  spec.summary       = "Chirpy is a minimal, sidebar, responsive web design Jekyll theme that focuses on text presentation."
  spec.homepage      = "https://github.com/cotes2020/jekyll-theme-chirpy"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f|
    f.match(%r!^((_(includes|layouts|sass|data|tabs|plugins)|assets)\/|_config|README|LICENSE|index)!i)
  }

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/cotes2020/jekyll-theme-chirpy/issues",
<<<<<<< HEAD
    "documentation_uri" => "https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/README.md",
=======
    "documentation_uri" => "https://github.com/cotes2020/jekyll-theme-chirpy/#readme",
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
    "homepage_uri"      => "https://cotes2020.github.io/chirpy-demo",
    "source_code_uri"   => "https://github.com/cotes2020/jekyll-theme-chirpy",
    "wiki_uri"          => "https://github.com/cotes2020/jekyll-theme-chirpy/wiki",
    "plugin_type"       => "theme"
  }

<<<<<<< HEAD
  spec.required_ruby_version = [">= 2.4", "< 3.0"]
=======
  spec.required_ruby_version = ">= 2.5"
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

  spec.add_runtime_dependency "jekyll", "~> 4.1"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7"
  spec.add_runtime_dependency "jekyll-archives", "~> 2.2"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

end
