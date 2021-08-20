# Imports
from typing import List, Union

from PIL import Image
from simplejson import dump


# Constants
IMAGE_FILE_PATH = "public/images/0.png"
MATRIX_FILE_PATH = "server/data/matrix.json"
IMAGE_FILE_PATHS = [f"public/images/{name}.png" for name in range(6)]
MATRICES_FILE_PATH = "server/data/matrices.json"


# Initializations
def matrix(image_path: str) -> List[List[int]]:
    """
    Creates matrix from image using its data and size.
    """

    image = Image.open(image_path)
    grayscale_image = image.convert("L")
    data = list(grayscale_image.getdata())
    width, height = grayscale_image.size

    return [
        data[offset : (offset + width)] for offset in range(0, width * height, width)
    ]


def matrices(image_paths: List[str]) -> List[List[List[int]]]:
    """
    Creates list of matrices from images using the matrix utility function.
    """

    return [matrix(path) for path in image_paths]


def write_data_to_file(
    data: Union[dict, List],
    file_path: str,
) -> None:
    """
    Writes data to file.
    """

    with open(file_path, "w") as f:
        dump(data, f)


if __name__ == "__main__":
    write_data_to_file(
        matrix(IMAGE_FILE_PATH),
        MATRIX_FILE_PATH,
    )
    write_data_to_file(
        matrices(IMAGE_FILE_PATHS),
        MATRICES_FILE_PATH,
    )
