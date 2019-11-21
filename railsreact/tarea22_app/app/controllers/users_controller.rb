class UsersController < ApplicationController
    def index
        users = User.all
        render json: users    
    end

    def create
    
    end

    def show
        user = User.find_by(name: params[:name])
        if user.password == params[:password] && user.email == params[:email]
            render json: user
        else
            render json: { message: 'Este usuario no está auntenticado'}    
        end
            
    end

    def update
    
    end


end
