<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div class="grid grid-cols-4 gap-4 mt-5">
    @foreach($products as $product)
      <div class="bg-slate-400 text-center rounded-lg">
      <a href="{{ route('products.show', ['id' => $product['id']]) }}">
        <h2 class="text-xl font-bold text-white">{{$product['name']}}</h2>
        <p class="text-md font-md text-gray-200">{{$product['description']}}</p>
        <span class="text-sm font-bold text-gray-300">{{$product['price']}}</span>
      </a>
      <form action="{{ route('products.delete', ['id' => $product['id']]) }}" method="POST">
                @csrf
                <button class="text-md font-bold text-red-500">Delete</button>
            </form>
      </div>
    @endforeach
  </div>
    
  
</body>
</html>