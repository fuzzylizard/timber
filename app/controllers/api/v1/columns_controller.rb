# frozen_string_literal: true

module Api
  module V1
    # Understands handling API requests for Columns resources
    class ColumnsController < ApplicationController
      # GETS /api/v1/columns
      def index
        columns = Column.all.order(:order)
        puts("columns: #{columns.inspect}")

        render json: columns
      end

      # GET /api/v1/columns/:id
      def show
        column = Column.find(params[:id])

        render json: column
      end

      # POST /api/v1/columns
      def create
        column = Current.session.user.columns.new(column_params)

        if column.save
          render json: column, status: :created
        else
          render json: column.errors, status: :unprocessable_entity
        end
      end

      # PUT /api/v1/columns/:id
      def update
        column = Column.find(params[:id])

        if column.update(column_params)
          render json: column
        else
          render json: column.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/columns/:id
      def destroy
        column = Column.find(params[:id])
        column.destroy

        head :no_content
      end

      private

      def column_params
        params.require(:column).permit(:name)
      end
    end
  end
end
