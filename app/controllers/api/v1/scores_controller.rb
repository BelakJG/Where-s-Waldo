class Api::V1::ScoresController < ApplicationController
  def index
    scores = Score.from_game(params[:game]).order(time: :asc).limit(5)
    render json: scores
  end

  def new
    score = Score.new
  end

  def create
    score = Score.new(score_params)
    if score.save
      render json: score
    else
      render json: score.errors
    end
  end

  private
  def score_params
    params.permit(:game, :name, :time)
  end
end
