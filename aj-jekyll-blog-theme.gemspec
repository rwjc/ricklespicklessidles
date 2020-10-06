# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "aj-jekyll-blog-theme"
    spec.version       = "1.0.0"
    spec.authors       = ["Arihant Jain"]
    spec.email         = [""]

    spec.summary       = "A simple and elegant jekyll theme created for writing blogs"
    spec.homepage      = "https://github.com/arihant-001/aj-jekyll-blog-theme"
    spec.license       = "MIT"

    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

    spec.add_runtime_dependency "jekyll", "~> 4.1"
    spec.add_runtime_dependency 'jekyll-paginate', '~> 1.1'
end
