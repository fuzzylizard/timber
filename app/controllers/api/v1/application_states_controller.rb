# frozen_string_literal: true

module Api
  module V1
    # Understands handling API requests for ApplicationState resources
    class ApplicationStatesController < ApplicationController
      # GETS /api/v1/application_states
      def index
        application_states = ApplicationState.all.order(:id)
        puts("application_states: #{application_states.inspect}")

        render json: application_states
      end

      # GET /api/v1/application_states/:id
      def show
        application_state = ApplicationState.find(params[:id])

        render json: application_state
      end

      # POST /api/v1/application_states
      def create
        application_state = ApplicationState.new(application_state_params)

        if application_state.save
          render json: application_state, status: :created
        else
          render json: application_state.errors, status: :unprocessable_entity
        end
      end

      # PUT /api/v1/application_states/:id
      def update
        application_state = ApplicationState.find(params[:id])

        if application_state.update(application_state_params)
          render json: application_state
        else
          render json: application_state.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/application_states/:id
      def destroy
        application_state = ApplicationState.find(params[:id])
        application_state.destroy

        head :no_content
      end

      private

      def application_state_params
        params.require(:application_state).permit(:name)
      end
    end
  end
end
