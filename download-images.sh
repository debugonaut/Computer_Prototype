#!/bin/bash

# Create images directory
mkdir -p images

# Download product images
echo "Downloading product images..."

# Apple products
curl -o images/iphone-15-pro.png "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692895395658"
curl -o images/macbook-air-m2.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"
curl -o images/airpods-pro.jpg "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361"
curl -o images/ipad-pro.png "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207213"

# Samsung products  
curl -o images/galaxy-s24.png "https://images.samsung.com/is/image/samsung/p6pim/us/2401/gallery/us-galaxy-s24-s928-sm-s928bzkeue-thumb-539573016?\$344_344_PNG\$"

echo "Download complete! Images saved in images/ folder"