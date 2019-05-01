FROM openjdk:8-jre-alpine

ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    JAVA_OPTS="" \
    COOLYBOT_SLEEP=0

VOLUME /tmp
EXPOSE 8761
CMD echo "The application will start in ${COOLYBOT_SLEEP}s..." && \
    sleep ${COOLYBOT_SLEEP} && \
    java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /app.war

# add directly the war
ADD *.war /app.war
