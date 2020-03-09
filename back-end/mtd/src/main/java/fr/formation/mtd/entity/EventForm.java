package fr.formation.mtd.entity;

import javax.persistence.*;

@Entity
public class EventForm {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	 	@Column(length = 20, nullable = false)
	    private String name;

	    @Column(length = 100, nullable = false)
	    private String description;

	    @Column(length = 100, nullable = false)
	    private String type;
	    
	    @Column(length = 50, nullable = false)
	    private String creator;
	    
	    @Column(length = 50, nullable = false)
	    private String city;
	    
	    @Column(length = 5, nullable = false)
	    private int roadNumber;
	    
	    @Column(length = 50, nullable = false)
	    private String streetName;
	    
	    @Column(length = 10, nullable = false)
	    private String date;
	    
	    @Column(length = 10, nullable = false)
	    private String hour;
	    
	    
	    
	    protected EventForm() {
	    	// Constructor
	    }

	    protected Long getId() {
	    	return id;
	        }

		@Override
		public String toString() {
			return "EventForm [id=" + id + ", name=" + name + ", description=" + description + ", type=" + type
					+ ", creator=" + creator + ", city=" + city + ", roadNumber=" + roadNumber + ", streetName="
					+ streetName + ", date=" + date + ", hour=" + hour + "]";
		}
	    
	    
	    
	    
	    
	
}
