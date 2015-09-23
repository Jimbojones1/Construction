require 'bundler'
Bundler.require()

get '/' do
  erb :index
end

get '/home' do
  redirect ('/')
end

get '/about' do
  erb :about
end

get '/services' do
  erb :services
end
