# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


FILE: app/controller/blog_posts_controller.rb

# ---1) The first step is to create a controller method that will access all the items from the database. 
# It has been defined and inherited from Application Controller in the parent class.Blog posts controller is the child class.
class BlogPostsController < ApplicationController
  def index
    
    # ---2) Makes an Active Record call that will save all the content from the database as an instance variable (post).
    #This will put items into the blog post table. It creates an instance variable on the index method to hold all of the current data.

    @posts = BlogPost.all
  end

  # ---3) Show is calling on a specific blog post id. Show method is showing one instance in our database method. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) BlogPost.new is a method that will take us to the form to create an new instance
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This is an instance variable that takes in a blog post, that then takes in a parameter. 
           #Create a new post with specfic data defined by the params method. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit

    # ---6) Creates a form for users to edit. This finds blog post that have an id, and then updates the blog post. 
    @post = BlogPost.find(params[:id])
  end
  def update
    @post = BlogPost.find(params[:id])


    # ---7) This updates the blog post to update the title and to make sure the content is valid. If valid the update method
     will return the object. It will then save it to the database. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else


      # ---8) If the blog post is not destroyed then it is redirected the user to the blog post to be destroyed. 
      #It redirets to the whole @post instance instead of the one path.
      redirect_to blog_post_path(@post)
    end
  end



  # ---9) When creating an API, the controller's strong parameters will be separated by the private key word. 
  #This is a private method that does not want to be public infromation. This is an encapsulated controller area that is private to users and can't 
  #be modified. 
  private
  def blog_post_params
    # ---10) By using the require method, we tell the user that we need the model (:blog post), but they can change the entry's title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end

