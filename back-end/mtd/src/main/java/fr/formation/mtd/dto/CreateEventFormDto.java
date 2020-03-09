package fr.formation.mtd.dto;


public class CreateEventFormDto {

    private String name;

    private String description;

    private String type;
    
    private String creator;
    
    private String city;
    
    private int roadNumber;
    
    private String streetName;
    
    private String date;
    
    private String hour;
    
    public CreateEventFormDto() {
    	// Constructor
    }

	@Override
	public String toString() {
		return "CreateEventFormDto [name=" + name + ", description=" + description + ", type=" + type + ", creator="
				+ creator + ", city=" + city + ", roadNumber=" + roadNumber + ", streetName=" + streetName + ", date="
				+ date + ", hour=" + hour + "]";
	}
    
    
    
}
