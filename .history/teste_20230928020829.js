if (checkAllBookState) {
          // Setar todos os checkboxes para TRUE
          await User.updateMany(
            {},
            {
              $set: { "shoppingCart.$[].checkboxState": true },
            }
          );
        } else