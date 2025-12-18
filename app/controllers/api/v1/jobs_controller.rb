# frozen_string_literal: true

class Api::V1::JobsController < ApplicationController
  skip_before_action :verify_authenticity_token
  # Returns all jobs
  # GET /api/v1/jobs
  def index
    if params[:application_state_id]
      jobs = Job.where(application_state_id: params[:application_state_id])
    else
      jobs = Job.all
    end
    render json: jobs
  end

  # Gets a specific job by ID
  # GET /api/v1/jobs/:id
  def show
    job = Job.find(params[:id])
    render json: job
  end

  # Creates a new job
  # POST /api/v1/jobs
  def create
    job = Job.new(job_params)

    if job.save
      render json: job, status: :created
    else
      render json: { errors: job.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Updates a job
  # PUT /api/v1/jobs/:id
  def update
    job = Job.find(params[:id])

    if job.update(job_params)
      render json: job
    else
      render json: { errors: job.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Deletes a job
  # DELETE /api/v1/jobs/:id
  def destroy
    job = Job.find(params[:id])
    job.destroy
    head :no_content
  end

  private

  def job_params
    params.require(:job).permit(:company_name, :job_ad_url, :job_title, :company_url, :notes, :application_state_id)
  end
end
