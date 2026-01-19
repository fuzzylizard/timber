# frozen_string_literal: true

# Understands user login, logout, and session status for the API.
class Api::SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[create]

  def create
    user = User.authenticate_by(params.permit(:email_address, :password))

    if user
      start_new_session_for user
      render json: { user: user, authenticated: true, notice: 'Successfully logged in' }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def show
    if Current.session.user
      render json: { authenticated: true, user: Current.session.user }, status: :ok
    else
      render json: { authenticated: false, error: 'Not logged in' }, status: :unauthorized
    end
  end

  def destroy
    terminate_session
    render json: { notice: 'successfully logged out' }
  rescue StandardError => e
    render json: { error: "Failed to log out: #{e.message}" }, status: :internal_server_error
  end

end
