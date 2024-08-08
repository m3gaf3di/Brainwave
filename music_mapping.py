# music_mapping.py
import pygame.midi

def initialize_midi():
    pygame.midi.init()
    player = pygame.midi.Output(0)
    player.set_instrument(1)  # Set the instrument, 1 is Acoustic Grand Piano
    return player

def brainwaves_to_music(alpha, beta, player):
    # Example: map alpha waves to pitch, beta to tempo
    pitch = int(np.mean(alpha) * 10) + 60  # Mapping alpha to pitch
    tempo = max(60, int(np.mean(beta) * 20))  # Mapping beta to tempo
    player.note_on(pitch, 127)  # Play the note
