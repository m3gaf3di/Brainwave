# main.py
from visualization import plot_brainwaves

if __name__ == "__main__":
    muse = connect_to_muse()
    if muse:
        player = initialize_midi()
        raw_data = start_stream(muse)
        while True:
            alpha, beta = preprocess_data(raw_data)
            brainwaves_to_music(alpha, beta, player)
            plot_brainwaves(alpha, beta)
