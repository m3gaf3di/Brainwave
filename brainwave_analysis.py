# brainwave_analysis.py
import numpy as np
from mne import filter

def preprocess_data(raw_data):
    # Apply filters to extract alpha, beta, etc.
    alpha = filter.filter_data(raw_data, sfreq=256, l_freq=8, h_freq=12)
    beta = filter.filter_data(raw_data, sfreq=256, l_freq=13, h_freq=30)
    return alpha, beta
