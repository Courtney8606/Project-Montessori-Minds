web: gunicorn -w 4 -b 0.0.0.0:$PORT app:app
release: psql -U montessori_minds_user -d montessori_minds -f api/seeds/montessori_data.sql > seed_log.txt 2>&1