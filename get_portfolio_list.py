"""
This gets the names of the images from the portfolio directory
and dumps them in images.json file.

Run this file whenever an image is added to the portfolio directory to
update images.json
"""

import os
import json

folder = "portfolio"

output = {}
count = 0

for f in os.listdir(folder):
    key = "image" + str(count)
    output[key] = os.path.join(folder, f)
    count += 1

with open("images.json", "w") as outfile:
    json.dump(output, outfile)
