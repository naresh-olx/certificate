import qrcode

# Create a QR code object
qr = qrcode.QRCode(version=1, box_size=10, border=5)

# Define the WiFi data
wifi = "https://internalapp.nptel.co/noc/Ecertificate/?q=NPTEL25HS12S105370460904572065"

# Add the WiFi data to the QR code object
qr.add_data(wifi)

# Make the QR code
qr.make(fit=True)

# Create an image from the QR code
img = qr.make_image(fill_color="black", back_color="white")

# Save the QR code image
img.save("saini.png")