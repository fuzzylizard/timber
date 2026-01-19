# frozen_string_literal: true

# Base controller for the application.
class ApplicationController < ActionController::Base
  include Authentication
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  protect_from_forgery with: :exception

  private

  def verified_request?
    origins = Rails.application.credentials.trusted_origins || []
    valid = super || origins.include?(request.origin)
    Rails.logger.warn("Blocked CSRF request from #{request.origin}") unless valid
    valid
  end
end
