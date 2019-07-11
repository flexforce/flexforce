FROM tomcat:8.0.41-jre8
RUN mkdir -p /data
ADD dist /usr/local/tomcat/webapps/flexforce
RUN rm -rf /usr/local/tomcat/webapps/flexforce
EXPOSE 8080
CMD ["/usr/local/tomcat/bin/catalina.sh", "run"]