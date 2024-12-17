<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="mt-5">
    <div class="w-1/3 mx-auto">
      <a href="{{ route('products.index') }}" class="text-xl font-md text-blue-500">Back</a>
      <div class="bg-slate-400 text-center rounded-lg ">
        <h2 class="text-xl font-bold text-white">{{$product['name']}}</h2>
        <p class="text-md font-md text-gray-200">{{$product['description']}}</p>
        <span class="text-sm font-bold text-gray-300">{{$product['price']}}</span>
      </div>
    </div>
  
  </div>
    
  
</body>
</html>