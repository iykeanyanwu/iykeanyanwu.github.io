"""
This gets the names of the images from the portfolio directory
and dumps them in images.json file.

Run this file whenever an image is added to the portfolio directory to
update images.json
"""

import os
import json

folder = "portfolio"

output = {"images": []}

for f in os.listdir(folder):
    output["images"].append(os.path.join(folder, f))

# Sort the list of images
# so that the ones with highest ID numbers will be at the top
output["images"].sort(
    key=lambda x: x.split(".")[-2].split("(ID-ICA")[-1].strip(")"),
    reverse=True
)

with open("images.json", "w") as outfile:
    json.dump(output, outfile)
