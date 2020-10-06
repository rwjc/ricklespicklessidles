# AJ Blog - Jekyll Theme
A simple and elegant jekyll theme for blogs.

## How to Use
- If you are unfamiliar with jekyll, check out <http://jekyllrb.com> read up on just the basics of front matter, writing posts, and creating pages.
- For setting github pages follow [Github Guides](https://guides.github.com/features/pages/)

Fork this repository then start editing the `_config.yml` file.
- update your name, email, etc.
- update baseurl to `/` or ` ` or `your website baseurl`

## Features
- Elegant Design
- Image Gallery  
    ```html
    <div class="gallery" data-columns="3">
        <img src="/aj-jekyll-blog-theme/assets/images/home.jpg">
        <img src="/aj-jekyll-blog-theme/assets/images/contact.jpg">
        <img src="/aj-jekyll-blog-theme/assets/images/about.jpg">
        <img src="/aj-jekyll-blog-theme/assets/images/project.jpg">
        <img src="/aj-jekyll-blog-theme/assets/images/post1.jpg">
    </div>
    ```
  
    ![test image](./assets/images/gallery.png)
    
- Image Carousels
    ```html
    <div class="gallery" data-columns="1">
        <img src="/aj-jekyll-blog-theme/assets/images/post1.jpg">
        <img src="/aj-jekyll-blog-theme/assets/images/post2.jpg">
        <img src="/aj-jekyll-blog-theme/assets/images/post3.jpg">
        <img src="/aj-jekyll-blog-theme/assets/images/post4.jpg">
    </div>
    ```
    ![test image](./assets/images/carousels.png)

- Pagination

## Contribution

Bug reports and pull requests are welcome on GitHub at <https://github.com/arihant-001/aj-jekyll-blog-theme>. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

As there are many issues in jekyll and ruby installation, a `jekyll` docker image is used for development.
```sh
# build docker image 
$ docker build -t theme .

# run docker container
$ docker run -itd --name theme --mount type=bind,source="$(pwd)",target=/srv/jekyll/code -p 4000:4000 theme bash

# enter docker container
$ docker exec -it theme bash

$ cd code

# run jekyll theme
$ bundler exec jekyll serve --watch --host 0.0.0.0
```

Open <http://0.0.0.0:4000/aj-jekyll-blog-theme/> 

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

