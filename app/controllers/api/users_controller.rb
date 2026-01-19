# frozen_string_literal: true

# Understands actions related to user management via API.
class Api::UsersController < ApplicationController
  allow_unauthenticated_access only: %i[create]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { message: 'User created successfully', user: @user }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email_address, :password, :password_confirmation)
  end
end
