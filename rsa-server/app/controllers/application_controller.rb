require 'openssl'

class ApplicationController < ActionController::Base
  @@rsa_key
  KEY_SIZE = 1024
  EXP = 11
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token

  def generate_keys
    @@rsa_key = OpenSSL::PKey::RSA.new(KEY_SIZE, EXP)
    render json: { key: @@rsa_key.public_key.to_s }
  end

  def decrypt
    result = @@rsa_key.private_decrypt([params[:data]].pack('H*')) rescue false
    render json: { data: result }
  end
end
