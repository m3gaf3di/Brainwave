# eeg_capture.py
import mne
from muselsl import stream, list_muses, Muse

def connect_to_muse():
    muses = list_muses()
    if not muses:
        print("No Muse devices found.")
        return None

    muse = Muse(address=muses[0]['address'])
    muse.connect()
    return muse

def start_stream(muse):
    stream(muse)

if __name__ == "__main__":
    muse = connect_to_muse()
    if muse:
        start_stream(muse)
