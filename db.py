import json
import os


class DB:
    def __init__(self, path: str='DB.json'):
        self.path = os.path.abspath(path)

        if not os.path.exists(self.path):
            with open(self.path, "x") as file:
                ...

    def get(self, key):
        with open(self.path) as f:
            data = json.load(f)
        keys = key.split('.')

        for k in keys:
            data = data[k]
        return data

    def set(self, key, value):
        with open(self.path) as f:
            data = json.load(f)
        keys = key.split('.')
        last_key = keys.pop()
        new_data = data
        for k in keys:
            try:
                new_data = new_data[k]
            except KeyError:
                new_data[k] = {}
                new_data = new_data[k]
        new_data[last_key] = value
        with open(self.path, 'w') as f:
            json.dump(data, f, indent=4)

    def enshure(self, key, st_value=None):
        try:
            return self.get(key)
        except KeyError:
            self.set(key, st_value)
            return self.get(key)
    
    def __contains__(self, key):
        try:
            self.get(key)
            return True
        except KeyError:
            return False