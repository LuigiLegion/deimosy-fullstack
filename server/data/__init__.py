# Imports
from simplejson import load


# Constants
MATRIX_FILE_PATH = "server/data/matrix.json"


# Initializations
with open(MATRIX_FILE_PATH, "r") as f:
    MATRIX = load(f)
